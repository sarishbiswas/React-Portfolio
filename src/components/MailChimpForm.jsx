import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailChimpForm = () => {
  const postUrl = `https://gmail.us22.list-manage.com/subscribe/post?u=e15402d720e4ba049255cf7cf&id=cad741717c`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formdata) => subscribe(formdata)}
          />
        )}
      />
    </>
  );
};
