# Nativescript


```text
simpleicons/N/Nativescript
```

```text
include('simpleicons/N/Nativescript')
```



| Illustration | Nativescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nativescript.png) | ![illustration for Nativescript](../../simpleicons/N/Nativescript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NativescriptXs>`
- `<$NativescriptSm>`
- `<$NativescriptMd>`
- `<$NativescriptLg>`





## Nativescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nativescript
include('simpleicons/N/Nativescript')

' renders the element
Nativescript('Nativescript', 'Nativescript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nativescript
include('simpleicons/N/Nativescript')

' renders the element
Nativescript('Nativescript', 'Nativescript', 'an optional tech label', 'an optional description')
@enduml
```

