# Twinkly


```text
simpleicons-14/T/Twinkly
```

```text
include('simpleicons-14/T/Twinkly')
```



| Illustration | Twinkly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Twinkly.png) | ![illustration for Twinkly](../../simpleicons-14/T/Twinkly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TwinklyXs>`
- `<$TwinklySm>`
- `<$TwinklyMd>`
- `<$TwinklyLg>`





## Twinkly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Twinkly
include('simpleicons-14/T/Twinkly')

' renders the element
Twinkly('Twinkly', 'Twinkly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Twinkly
include('simpleicons-14/T/Twinkly')

' renders the element
Twinkly('Twinkly', 'Twinkly', 'an optional tech label', 'an optional description')
@enduml
```

