# Thesoundsresource


```text
simpleicons/T/Thesoundsresource
```

```text
include('simpleicons/T/Thesoundsresource')
```



| Illustration | Thesoundsresource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Thesoundsresource.png) | ![illustration for Thesoundsresource](../../simpleicons/T/Thesoundsresource.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThesoundsresourceXs>`
- `<$ThesoundsresourceSm>`
- `<$ThesoundsresourceMd>`
- `<$ThesoundsresourceLg>`





## Thesoundsresource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Thesoundsresource
include('simpleicons/T/Thesoundsresource')

' renders the element
Thesoundsresource('Thesoundsresource', 'Thesoundsresource', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thesoundsresource
include('simpleicons/T/Thesoundsresource')

' renders the element
Thesoundsresource('Thesoundsresource', 'Thesoundsresource', 'an optional tech label', 'an optional description')
@enduml
```

