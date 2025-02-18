# Codingninjas


```text
simpleicons-14/C/Codingninjas
```

```text
include('simpleicons-14/C/Codingninjas')
```



| Illustration | Codingninjas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codingninjas.png) | ![illustration for Codingninjas](../../simpleicons-14/C/Codingninjas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodingninjasXs>`
- `<$CodingninjasSm>`
- `<$CodingninjasMd>`
- `<$CodingninjasLg>`





## Codingninjas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codingninjas
include('simpleicons-14/C/Codingninjas')

' renders the element
Codingninjas('Codingninjas', 'Codingninjas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codingninjas
include('simpleicons-14/C/Codingninjas')

' renders the element
Codingninjas('Codingninjas', 'Codingninjas', 'an optional tech label', 'an optional description')
@enduml
```

