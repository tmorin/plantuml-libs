# Dragon


```text
fontawesome/Solid/Dragon
```

```text
include('fontawesome/Solid/Dragon')
```



| Illustration | Dragon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dragon.png) | ![illustration for Dragon](../../fontawesome/Solid/Dragon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DragonXs>`
- `<$DragonSm>`
- `<$DragonMd>`
- `<$DragonLg>`





## Dragon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dragon
include('fontawesome/Solid/Dragon')

' renders the element
Dragon('Dragon', 'Dragon', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dragon
include('fontawesome/Solid/Dragon')

' renders the element
Dragon('Dragon', 'Dragon', 'an optional tech label', 'an optional description')
@enduml
```

