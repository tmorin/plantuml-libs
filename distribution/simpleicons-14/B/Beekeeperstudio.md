# Beekeeperstudio


```text
simpleicons-14/B/Beekeeperstudio
```

```text
include('simpleicons-14/B/Beekeeperstudio')
```



| Illustration | Beekeeperstudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Beekeeperstudio.png) | ![illustration for Beekeeperstudio](../../simpleicons-14/B/Beekeeperstudio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeekeeperstudioXs>`
- `<$BeekeeperstudioSm>`
- `<$BeekeeperstudioMd>`
- `<$BeekeeperstudioLg>`





## Beekeeperstudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Beekeeperstudio
include('simpleicons-14/B/Beekeeperstudio')

' renders the element
Beekeeperstudio('Beekeeperstudio', 'Beekeeperstudio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Beekeeperstudio
include('simpleicons-14/B/Beekeeperstudio')

' renders the element
Beekeeperstudio('Beekeeperstudio', 'Beekeeperstudio', 'an optional tech label', 'an optional description')
@enduml
```

