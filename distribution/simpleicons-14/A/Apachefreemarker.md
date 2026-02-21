# Apachefreemarker


```text
simpleicons-14/A/Apachefreemarker
```

```text
include('simpleicons-14/A/Apachefreemarker')
```



| Illustration | Apachefreemarker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apachefreemarker.png) | ![illustration for Apachefreemarker](../../simpleicons-14/A/Apachefreemarker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachefreemarkerXs>`
- `<$ApachefreemarkerSm>`
- `<$ApachefreemarkerMd>`
- `<$ApachefreemarkerLg>`





## Apachefreemarker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apachefreemarker
include('simpleicons-14/A/Apachefreemarker')

' renders the element
Apachefreemarker('Apachefreemarker', 'Apachefreemarker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachefreemarker
include('simpleicons-14/A/Apachefreemarker')

' renders the element
Apachefreemarker('Apachefreemarker', 'Apachefreemarker', 'an optional tech label', 'an optional description')
@enduml
```

