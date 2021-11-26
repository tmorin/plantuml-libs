# Pulumi


```text
simpleicons-5/P/Pulumi
```

```text
include('simpleicons-5/P/Pulumi')
```



| Illustration | Pulumi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pulumi.png) | ![illustration for Pulumi](../../simpleicons-5/P/Pulumi.Local.png) |




## Pulumi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pulumi
include('simpleicons-5/P/Pulumi')

' renders the element
Pulumi('Pulumi', 'Pulumi', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pulumi
include('simpleicons-5/P/Pulumi')

' renders the element
Pulumi('Pulumi', 'Pulumi', 'an optional tech label')
@enduml
```

