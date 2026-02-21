# Octobercms


```text
simpleicons-14/O/Octobercms
```

```text
include('simpleicons-14/O/Octobercms')
```



| Illustration | Octobercms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Octobercms.png) | ![illustration for Octobercms](../../simpleicons-14/O/Octobercms.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Octobercms
include('simpleicons-14/O/Octobercms')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Octobercms
include('simpleicons-14/O/Octobercms')

' renders the element
Octobercms('Octobercms', 'Octobercms', 'an optional tech label', 'an optional description')
@enduml
```

