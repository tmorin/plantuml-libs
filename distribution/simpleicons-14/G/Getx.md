# Getx


```text
simpleicons-14/G/Getx
```

```text
include('simpleicons-14/G/Getx')
```



| Illustration | Getx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Getx.png) | ![illustration for Getx](../../simpleicons-14/G/Getx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GetxXs>`
- `<$GetxSm>`
- `<$GetxMd>`
- `<$GetxLg>`





## Getx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Getx
include('simpleicons-14/G/Getx')

' renders the element
Getx('Getx', 'Getx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Getx
include('simpleicons-14/G/Getx')

' renders the element
Getx('Getx', 'Getx', 'an optional tech label', 'an optional description')
@enduml
```

