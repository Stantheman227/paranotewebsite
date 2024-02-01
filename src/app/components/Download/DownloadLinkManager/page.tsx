const DownloadLinkManager = ({
  children,
  downloadUrl,
}: {
  children: (startDownload: () => void) => JSX.Element;
  downloadUrl: string;
}) => {
  const startDownload = () => {
    window.location.href = downloadUrl;
  };

  return children(startDownload);
};

export default DownloadLinkManager;
