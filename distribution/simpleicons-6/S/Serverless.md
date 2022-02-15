# Serverless


```text
simpleicons-6/S/Serverless
```

```text
include('simpleicons-6/S/Serverless')
```



| Illustration | Serverless |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Serverless.png) | ![illustration for Serverless](../../simpleicons-6/S/Serverless.Local.png) |




## Serverless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Serverless
include('simpleicons-6/S/Serverless')

' renders the element
Serverless('Serverless', 'Serverless', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Serverless
include('simpleicons-6/S/Serverless')

' renders the element
Serverless('Serverless', 'Serverless', 'an optional tech label')
@enduml
```

