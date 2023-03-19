# Awsfargate


```text
simpleicons-8/A/Awsfargate
```

```text
include('simpleicons-8/A/Awsfargate')
```



| Illustration | Awsfargate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Awsfargate.png) | ![illustration for Awsfargate](../../simpleicons-8/A/Awsfargate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsfargateXs>`
- `<$AwsfargateSm>`
- `<$AwsfargateMd>`
- `<$AwsfargateLg>`





## Awsfargate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Awsfargate
include('simpleicons-8/A/Awsfargate')

' renders the element
Awsfargate('Awsfargate', 'Awsfargate', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Awsfargate
include('simpleicons-8/A/Awsfargate')

' renders the element
Awsfargate('Awsfargate', 'Awsfargate', 'an optional tech label', 'an optional description')
@enduml
```

