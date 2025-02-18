# Jrgroup


```text
simpleicons-14/J/Jrgroup
```

```text
include('simpleicons-14/J/Jrgroup')
```



| Illustration | Jrgroup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Jrgroup.png) | ![illustration for Jrgroup](../../simpleicons-14/J/Jrgroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JrgroupXs>`
- `<$JrgroupSm>`
- `<$JrgroupMd>`
- `<$JrgroupLg>`





## Jrgroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Jrgroup
include('simpleicons-14/J/Jrgroup')

' renders the element
Jrgroup('Jrgroup', 'Jrgroup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jrgroup
include('simpleicons-14/J/Jrgroup')

' renders the element
Jrgroup('Jrgroup', 'Jrgroup', 'an optional tech label', 'an optional description')
@enduml
```

