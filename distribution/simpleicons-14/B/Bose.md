# Bose


```text
simpleicons-14/B/Bose
```

```text
include('simpleicons-14/B/Bose')
```



| Illustration | Bose |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bose.png) | ![illustration for Bose](../../simpleicons-14/B/Bose.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoseXs>`
- `<$BoseSm>`
- `<$BoseMd>`
- `<$BoseLg>`





## Bose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bose
include('simpleicons-14/B/Bose')

' renders the element
Bose('Bose', 'Bose', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bose
include('simpleicons-14/B/Bose')

' renders the element
Bose('Bose', 'Bose', 'an optional tech label', 'an optional description')
@enduml
```

