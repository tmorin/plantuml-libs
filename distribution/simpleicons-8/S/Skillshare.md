# Skillshare


```text
simpleicons-8/S/Skillshare
```

```text
include('simpleicons-8/S/Skillshare')
```



| Illustration | Skillshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Skillshare.png) | ![illustration for Skillshare](../../simpleicons-8/S/Skillshare.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Skillshare
include('simpleicons-8/S/Skillshare')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Skillshare
include('simpleicons-8/S/Skillshare')

' renders the element
Skillshare('Skillshare', 'Skillshare', 'an optional tech label', 'an optional description')
@enduml
```

