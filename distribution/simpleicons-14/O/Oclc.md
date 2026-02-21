# Oclc


```text
simpleicons-14/O/Oclc
```

```text
include('simpleicons-14/O/Oclc')
```



| Illustration | Oclc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Oclc.png) | ![illustration for Oclc](../../simpleicons-14/O/Oclc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OclcXs>`
- `<$OclcSm>`
- `<$OclcMd>`
- `<$OclcLg>`





## Oclc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Oclc
include('simpleicons-14/O/Oclc')

' renders the element
Oclc('Oclc', 'Oclc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oclc
include('simpleicons-14/O/Oclc')

' renders the element
Oclc('Oclc', 'Oclc', 'an optional tech label', 'an optional description')
@enduml
```

