# Octobercms


```text
simpleicons/O/Octobercms
```

```text
include('simpleicons/O/Octobercms')
```



| Illustration | Octobercms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Octobercms.png) | ![illustration for Octobercms](../../simpleicons/O/Octobercms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OctobercmsXs>`
- `<$OctobercmsSm>`
- `<$OctobercmsMd>`
- `<$OctobercmsLg>`





## Octobercms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Octobercms
include('simpleicons/O/Octobercms')

' renders the element
Octobercms('Octobercms', 'Octobercms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Octobercms
include('simpleicons/O/Octobercms')

' renders the element
Octobercms('Octobercms', 'Octobercms', 'an optional tech label', 'an optional description')
@enduml
```

