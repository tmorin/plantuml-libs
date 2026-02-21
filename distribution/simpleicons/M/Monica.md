# Monica


```text
simpleicons/M/Monica
```

```text
include('simpleicons/M/Monica')
```



| Illustration | Monica |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Monica.png) | ![illustration for Monica](../../simpleicons/M/Monica.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonicaXs>`
- `<$MonicaSm>`
- `<$MonicaMd>`
- `<$MonicaLg>`





## Monica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Monica
include('simpleicons/M/Monica')

' renders the element
Monica('Monica', 'Monica', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monica
include('simpleicons/M/Monica')

' renders the element
Monica('Monica', 'Monica', 'an optional tech label', 'an optional description')
@enduml
```

