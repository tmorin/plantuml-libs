# Cloudnativebuild


```text
simpleicons/C/Cloudnativebuild
```

```text
include('simpleicons/C/Cloudnativebuild')
```



| Illustration | Cloudnativebuild |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cloudnativebuild.png) | ![illustration for Cloudnativebuild](../../simpleicons/C/Cloudnativebuild.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudnativebuildXs>`
- `<$CloudnativebuildSm>`
- `<$CloudnativebuildMd>`
- `<$CloudnativebuildLg>`





## Cloudnativebuild

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cloudnativebuild
include('simpleicons/C/Cloudnativebuild')

' renders the element
Cloudnativebuild('Cloudnativebuild', 'Cloudnativebuild', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudnativebuild
include('simpleicons/C/Cloudnativebuild')

' renders the element
Cloudnativebuild('Cloudnativebuild', 'Cloudnativebuild', 'an optional tech label', 'an optional description')
@enduml
```

