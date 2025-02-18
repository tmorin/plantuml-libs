# Eightsleep


```text
simpleicons-14/E/Eightsleep
```

```text
include('simpleicons-14/E/Eightsleep')
```



| Illustration | Eightsleep |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Eightsleep.png) | ![illustration for Eightsleep](../../simpleicons-14/E/Eightsleep.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EightsleepXs>`
- `<$EightsleepSm>`
- `<$EightsleepMd>`
- `<$EightsleepLg>`





## Eightsleep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eightsleep
include('simpleicons-14/E/Eightsleep')

' renders the element
Eightsleep('Eightsleep', 'Eightsleep', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eightsleep
include('simpleicons-14/E/Eightsleep')

' renders the element
Eightsleep('Eightsleep', 'Eightsleep', 'an optional tech label', 'an optional description')
@enduml
```

