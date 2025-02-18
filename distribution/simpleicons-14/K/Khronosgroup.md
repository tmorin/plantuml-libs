# Khronosgroup


```text
simpleicons-14/K/Khronosgroup
```

```text
include('simpleicons-14/K/Khronosgroup')
```



| Illustration | Khronosgroup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Khronosgroup.png) | ![illustration for Khronosgroup](../../simpleicons-14/K/Khronosgroup.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Khronosgroup
include('simpleicons-14/K/Khronosgroup')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Khronosgroup
include('simpleicons-14/K/Khronosgroup')

' renders the element
Khronosgroup('Khronosgroup', 'Khronosgroup', 'an optional tech label', 'an optional description')
@enduml
```

