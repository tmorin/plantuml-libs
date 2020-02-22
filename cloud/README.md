# Cloud - with AWS, Azure and GCP

> PlantUML library providing elements and groups for the following cloud providers: Amazon Web Services, Microsoft Azure, Google Cloud Platform (+ material icons).

## Include the library

Include remotely the library:
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml
@enduml
```

Include locally the library:
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml
@enduml
```

## Load the style flavor

Guidelines about architecture diagrams changes according the cloud provider.
It can be about elements' shapes, font sizes, colors etc. 

```plantuml
@startuml
' loads the AWS style
include('styles/aws')
@enduml
```

```plantuml
@startuml
' loads the Azure style
include('styles/azure')
@enduml
```

```plantuml
@startuml
' loads the GCP style
include('styles/gcp')
@enduml
```

## Load other resources

Additional sub-libraries can be included.

```plantuml
@startuml
' loads the AwsAnalytics element
include('elements/aws/Analytics/AwsAnalytics')
' loads the AwsCloud9Resource element
include('elements/aws/DeveloperTools/AwsCloud9Resource')
' loads the AwsGroupCloud group
include('groups/aws/AwsGroupCloud')
AwsGroupCloud('element', 'Cloud', 'an optional tech field')
@enduml
```

## Resources

- `aws` - Amazon Web Services
  - [Elements](documentation/aws/elements.md)
  - [Groups](documentation/aws/groups.md)
- `azure` - Microsoft Azure
  - [Elements](documentation/azure/elements.md)
  - [Groups](documentation/azure/groups.md)
- `gcp` - Google Cloud Platform
  - [Elements](documentation/gcp/elements.md)
  - [Groups](documentation/gcp/groups.md)
  - [Material Icons](documentation/materials/elements.md)

## Resources

Examples with sources can be reviewed there: [examples](examples.md).
