# Csdn


```text
simpleicons-14/C/Csdn
```

```text
include('simpleicons-14/C/Csdn')
```



| Illustration | Csdn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Csdn.png) | ![illustration for Csdn](../../simpleicons-14/C/Csdn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CsdnXs>`
- `<$CsdnSm>`
- `<$CsdnMd>`
- `<$CsdnLg>`





## Csdn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Csdn
include('simpleicons-14/C/Csdn')

' renders the element
Csdn('Csdn', 'Csdn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Csdn
include('simpleicons-14/C/Csdn')

' renders the element
Csdn('Csdn', 'Csdn', 'an optional tech label', 'an optional description')
@enduml
```

