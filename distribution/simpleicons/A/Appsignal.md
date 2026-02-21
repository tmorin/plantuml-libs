# Appsignal


```text
simpleicons/A/Appsignal
```

```text
include('simpleicons/A/Appsignal')
```



| Illustration | Appsignal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Appsignal.png) | ![illustration for Appsignal](../../simpleicons/A/Appsignal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppsignalXs>`
- `<$AppsignalSm>`
- `<$AppsignalMd>`
- `<$AppsignalLg>`





## Appsignal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Appsignal
include('simpleicons/A/Appsignal')

' renders the element
Appsignal('Appsignal', 'Appsignal', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Appsignal
include('simpleicons/A/Appsignal')

' renders the element
Appsignal('Appsignal', 'Appsignal', 'an optional tech label', 'an optional description')
@enduml
```

