# Twoo


```text
simpleicons-14/T/Twoo
```

```text
include('simpleicons-14/T/Twoo')
```



| Illustration | Twoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Twoo.png) | ![illustration for Twoo](../../simpleicons-14/T/Twoo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TwooXs>`
- `<$TwooSm>`
- `<$TwooMd>`
- `<$TwooLg>`





## Twoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Twoo
include('simpleicons-14/T/Twoo')

' renders the element
Twoo('Twoo', 'Twoo', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Twoo
include('simpleicons-14/T/Twoo')

' renders the element
Twoo('Twoo', 'Twoo', 'an optional tech label', 'an optional description')
@enduml
```

