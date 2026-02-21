# Fdroid


```text
simpleicons/F/Fdroid
```

```text
include('simpleicons/F/Fdroid')
```



| Illustration | Fdroid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fdroid.png) | ![illustration for Fdroid](../../simpleicons/F/Fdroid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FdroidXs>`
- `<$FdroidSm>`
- `<$FdroidMd>`
- `<$FdroidLg>`





## Fdroid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fdroid
include('simpleicons/F/Fdroid')

' renders the element
Fdroid('Fdroid', 'Fdroid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fdroid
include('simpleicons/F/Fdroid')

' renders the element
Fdroid('Fdroid', 'Fdroid', 'an optional tech label', 'an optional description')
@enduml
```

