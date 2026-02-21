# Sourceengine


```text
simpleicons/S/Sourceengine
```

```text
include('simpleicons/S/Sourceengine')
```



| Illustration | Sourceengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sourceengine.png) | ![illustration for Sourceengine](../../simpleicons/S/Sourceengine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SourceengineXs>`
- `<$SourceengineSm>`
- `<$SourceengineMd>`
- `<$SourceengineLg>`





## Sourceengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sourceengine
include('simpleicons/S/Sourceengine')

' renders the element
Sourceengine('Sourceengine', 'Sourceengine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sourceengine
include('simpleicons/S/Sourceengine')

' renders the element
Sourceengine('Sourceengine', 'Sourceengine', 'an optional tech label', 'an optional description')
@enduml
```

