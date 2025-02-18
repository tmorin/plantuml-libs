# Sessionize


```text
simpleicons-14/S/Sessionize
```

```text
include('simpleicons-14/S/Sessionize')
```



| Illustration | Sessionize |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sessionize.png) | ![illustration for Sessionize](../../simpleicons-14/S/Sessionize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SessionizeXs>`
- `<$SessionizeSm>`
- `<$SessionizeMd>`
- `<$SessionizeLg>`





## Sessionize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sessionize
include('simpleicons-14/S/Sessionize')

' renders the element
Sessionize('Sessionize', 'Sessionize', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sessionize
include('simpleicons-14/S/Sessionize')

' renders the element
Sessionize('Sessionize', 'Sessionize', 'an optional tech label', 'an optional description')
@enduml
```

