# Apachestorm


```text
simpleicons/A/Apachestorm
```

```text
include('simpleicons/A/Apachestorm')
```



| Illustration | Apachestorm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachestorm.png) | ![illustration for Apachestorm](../../simpleicons/A/Apachestorm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachestormXs>`
- `<$ApachestormSm>`
- `<$ApachestormMd>`
- `<$ApachestormLg>`





## Apachestorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachestorm
include('simpleicons/A/Apachestorm')

' renders the element
Apachestorm('Apachestorm', 'Apachestorm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachestorm
include('simpleicons/A/Apachestorm')

' renders the element
Apachestorm('Apachestorm', 'Apachestorm', 'an optional tech label', 'an optional description')
@enduml
```

