# Centos


```text
simpleicons-8/C/Centos
```

```text
include('simpleicons-8/C/Centos')
```



| Illustration | Centos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Centos.png) | ![illustration for Centos](../../simpleicons-8/C/Centos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CentosXs>`
- `<$CentosSm>`
- `<$CentosMd>`
- `<$CentosLg>`





## Centos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Centos
include('simpleicons-8/C/Centos')

' renders the element
Centos('Centos', 'Centos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Centos
include('simpleicons-8/C/Centos')

' renders the element
Centos('Centos', 'Centos', 'an optional tech label', 'an optional description')
@enduml
```

