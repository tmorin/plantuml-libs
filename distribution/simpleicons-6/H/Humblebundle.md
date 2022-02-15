# Humblebundle


```text
simpleicons-6/H/Humblebundle
```

```text
include('simpleicons-6/H/Humblebundle')
```



| Illustration | Humblebundle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Humblebundle.png) | ![illustration for Humblebundle](../../simpleicons-6/H/Humblebundle.Local.png) |




## Humblebundle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Humblebundle
include('simpleicons-6/H/Humblebundle')

' renders the element
Humblebundle('Humblebundle', 'Humblebundle', 'an optional tech label')
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

' loads the Item which embeds the element Humblebundle
include('simpleicons-6/H/Humblebundle')

' renders the element
Humblebundle('Humblebundle', 'Humblebundle', 'an optional tech label')
@enduml
```

