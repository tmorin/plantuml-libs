# Egghead


```text
simpleicons/E/Egghead
```

```text
include('simpleicons/E/Egghead')
```



| Illustration | Egghead |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Egghead.png) | ![illustration for Egghead](../../simpleicons/E/Egghead.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EggheadXs>`
- `<$EggheadSm>`
- `<$EggheadMd>`
- `<$EggheadLg>`





## Egghead

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Egghead
include('simpleicons/E/Egghead')

' renders the element
Egghead('Egghead', 'Egghead', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Egghead
include('simpleicons/E/Egghead')

' renders the element
Egghead('Egghead', 'Egghead', 'an optional tech label', 'an optional description')
@enduml
```

