# Ubisoft


```text
simpleicons-14/U/Ubisoft
```

```text
include('simpleicons-14/U/Ubisoft')
```



| Illustration | Ubisoft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Ubisoft.png) | ![illustration for Ubisoft](../../simpleicons-14/U/Ubisoft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UbisoftXs>`
- `<$UbisoftSm>`
- `<$UbisoftMd>`
- `<$UbisoftLg>`





## Ubisoft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ubisoft
include('simpleicons-14/U/Ubisoft')

' renders the element
Ubisoft('Ubisoft', 'Ubisoft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ubisoft
include('simpleicons-14/U/Ubisoft')

' renders the element
Ubisoft('Ubisoft', 'Ubisoft', 'an optional tech label', 'an optional description')
@enduml
```

