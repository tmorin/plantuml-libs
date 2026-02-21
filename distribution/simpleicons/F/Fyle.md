# Fyle


```text
simpleicons/F/Fyle
```

```text
include('simpleicons/F/Fyle')
```



| Illustration | Fyle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fyle.png) | ![illustration for Fyle](../../simpleicons/F/Fyle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FyleXs>`
- `<$FyleSm>`
- `<$FyleMd>`
- `<$FyleLg>`





## Fyle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fyle
include('simpleicons/F/Fyle')

' renders the element
Fyle('Fyle', 'Fyle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fyle
include('simpleicons/F/Fyle')

' renders the element
Fyle('Fyle', 'Fyle', 'an optional tech label', 'an optional description')
@enduml
```

