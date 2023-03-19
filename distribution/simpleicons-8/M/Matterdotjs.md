# Matterdotjs


```text
simpleicons-8/M/Matterdotjs
```

```text
include('simpleicons-8/M/Matterdotjs')
```



| Illustration | Matterdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Matterdotjs.png) | ![illustration for Matterdotjs](../../simpleicons-8/M/Matterdotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MatterdotjsXs>`
- `<$MatterdotjsSm>`
- `<$MatterdotjsMd>`
- `<$MatterdotjsLg>`





## Matterdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Matterdotjs
include('simpleicons-8/M/Matterdotjs')

' renders the element
Matterdotjs('Matterdotjs', 'Matterdotjs', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Matterdotjs
include('simpleicons-8/M/Matterdotjs')

' renders the element
Matterdotjs('Matterdotjs', 'Matterdotjs', 'an optional tech label', 'an optional description')
@enduml
```

