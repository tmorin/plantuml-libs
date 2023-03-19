# Khronosgroup


```text
simpleicons-8/K/Khronosgroup
```

```text
include('simpleicons-8/K/Khronosgroup')
```



| Illustration | Khronosgroup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Khronosgroup.png) | ![illustration for Khronosgroup](../../simpleicons-8/K/Khronosgroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KhronosgroupXs>`
- `<$KhronosgroupSm>`
- `<$KhronosgroupMd>`
- `<$KhronosgroupLg>`





## Khronosgroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Khronosgroup
include('simpleicons-8/K/Khronosgroup')

' renders the element
Khronosgroup('Khronosgroup', 'Khronosgroup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Khronosgroup
include('simpleicons-8/K/Khronosgroup')

' renders the element
Khronosgroup('Khronosgroup', 'Khronosgroup', 'an optional tech label', 'an optional description')
@enduml
```

