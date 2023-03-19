# Cannabis


```text
fontawesome-6/Solid/Cannabis
```

```text
include('fontawesome-6/Solid/Cannabis')
```



| Illustration | Cannabis |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Cannabis.png) | ![illustration for Cannabis](../../fontawesome-6/Solid/Cannabis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CannabisXs>`
- `<$CannabisSm>`
- `<$CannabisMd>`
- `<$CannabisLg>`





## Cannabis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cannabis
include('fontawesome-6/Solid/Cannabis')

' renders the element
Cannabis('Cannabis', 'Cannabis', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cannabis
include('fontawesome-6/Solid/Cannabis')

' renders the element
Cannabis('Cannabis', 'Cannabis', 'an optional tech label', 'an optional description')
@enduml
```

