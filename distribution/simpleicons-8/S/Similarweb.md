# Similarweb


```text
simpleicons-8/S/Similarweb
```

```text
include('simpleicons-8/S/Similarweb')
```



| Illustration | Similarweb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Similarweb.png) | ![illustration for Similarweb](../../simpleicons-8/S/Similarweb.Local.png) |




## Similarweb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Similarweb
include('simpleicons-8/S/Similarweb')

' renders the element
Similarweb('Similarweb', 'Similarweb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Similarweb
include('simpleicons-8/S/Similarweb')

' renders the element
Similarweb('Similarweb', 'Similarweb', 'an optional tech label', 'an optional description')
@enduml
```

