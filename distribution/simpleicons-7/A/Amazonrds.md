# Amazonrds


```text
simpleicons-7/A/Amazonrds
```

```text
include('simpleicons-7/A/Amazonrds')
```



| Illustration | Amazonrds |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Amazonrds.png) | ![illustration for Amazonrds](../../simpleicons-7/A/Amazonrds.Local.png) |




## Amazonrds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amazonrds
include('simpleicons-7/A/Amazonrds')

' renders the element
Amazonrds('Amazonrds', 'Amazonrds', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amazonrds
include('simpleicons-7/A/Amazonrds')

' renders the element
Amazonrds('Amazonrds', 'Amazonrds', 'an optional tech label')
@enduml
```

