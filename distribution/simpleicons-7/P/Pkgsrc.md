# Pkgsrc


```text
simpleicons-7/P/Pkgsrc
```

```text
include('simpleicons-7/P/Pkgsrc')
```



| Illustration | Pkgsrc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Pkgsrc.png) | ![illustration for Pkgsrc](../../simpleicons-7/P/Pkgsrc.Local.png) |




## Pkgsrc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Pkgsrc
include('simpleicons-7/P/Pkgsrc')

' renders the element
Pkgsrc('Pkgsrc', 'Pkgsrc', 'an optional tech label')
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

' loads the Item which embeds the element Pkgsrc
include('simpleicons-7/P/Pkgsrc')

' renders the element
Pkgsrc('Pkgsrc', 'Pkgsrc', 'an optional tech label')
@enduml
```

