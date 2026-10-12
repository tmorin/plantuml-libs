# Glass


```text
simpleicons/G/Glass
```

```text
include('simpleicons/G/Glass')
```



| Illustration | Glass |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Glass.png) | ![illustration for Glass](../../simpleicons/G/Glass.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlassXs>`
- `<$GlassSm>`
- `<$GlassMd>`
- `<$GlassLg>`





## Glass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Glass
include('simpleicons/G/Glass')

' renders the element
Glass('Glass', 'Glass', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Glass
include('simpleicons/G/Glass')

' renders the element
Glass('Glass', 'Glass', 'an optional tech label', 'an optional description')
@enduml
```

