# Jirasoftware


```text
simpleicons/J/Jirasoftware
```

```text
include('simpleicons/J/Jirasoftware')
```



| Illustration | Jirasoftware |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jirasoftware.png) | ![illustration for Jirasoftware](../../simpleicons/J/Jirasoftware.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JirasoftwareXs>`
- `<$JirasoftwareSm>`
- `<$JirasoftwareMd>`
- `<$JirasoftwareLg>`





## Jirasoftware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jirasoftware
include('simpleicons/J/Jirasoftware')

' renders the element
Jirasoftware('Jirasoftware', 'Jirasoftware', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jirasoftware
include('simpleicons/J/Jirasoftware')

' renders the element
Jirasoftware('Jirasoftware', 'Jirasoftware', 'an optional tech label', 'an optional description')
@enduml
```

