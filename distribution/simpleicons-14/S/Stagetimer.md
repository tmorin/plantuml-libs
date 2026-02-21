# Stagetimer


```text
simpleicons-14/S/Stagetimer
```

```text
include('simpleicons-14/S/Stagetimer')
```



| Illustration | Stagetimer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stagetimer.png) | ![illustration for Stagetimer](../../simpleicons-14/S/Stagetimer.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stagetimer
include('simpleicons-14/S/Stagetimer')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stagetimer
include('simpleicons-14/S/Stagetimer')

' renders the element
Stagetimer('Stagetimer', 'Stagetimer', 'an optional tech label', 'an optional description')
@enduml
```

