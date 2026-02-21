# Stagetimer


```text
simpleicons/S/Stagetimer
```

```text
include('simpleicons/S/Stagetimer')
```



| Illustration | Stagetimer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Stagetimer.png) | ![illustration for Stagetimer](../../simpleicons/S/Stagetimer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StagetimerXs>`
- `<$StagetimerSm>`
- `<$StagetimerMd>`
- `<$StagetimerLg>`





## Stagetimer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Stagetimer
include('simpleicons/S/Stagetimer')

' renders the element
Stagetimer('Stagetimer', 'Stagetimer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stagetimer
include('simpleicons/S/Stagetimer')

' renders the element
Stagetimer('Stagetimer', 'Stagetimer', 'an optional tech label', 'an optional description')
@enduml
```

