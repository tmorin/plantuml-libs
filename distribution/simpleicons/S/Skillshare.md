# Skillshare


```text
simpleicons/S/Skillshare
```

```text
include('simpleicons/S/Skillshare')
```



| Illustration | Skillshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Skillshare.png) | ![illustration for Skillshare](../../simpleicons/S/Skillshare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkillshareXs>`
- `<$SkillshareSm>`
- `<$SkillshareMd>`
- `<$SkillshareLg>`





## Skillshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Skillshare
include('simpleicons/S/Skillshare')

' renders the element
Skillshare('Skillshare', 'Skillshare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skillshare
include('simpleicons/S/Skillshare')

' renders the element
Skillshare('Skillshare', 'Skillshare', 'an optional tech label', 'an optional description')
@enduml
```

