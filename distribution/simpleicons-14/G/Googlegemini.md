# Googlegemini


```text
simpleicons-14/G/Googlegemini
```

```text
include('simpleicons-14/G/Googlegemini')
```



| Illustration | Googlegemini |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlegemini.png) | ![illustration for Googlegemini](../../simpleicons-14/G/Googlegemini.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglegeminiXs>`
- `<$GooglegeminiSm>`
- `<$GooglegeminiMd>`
- `<$GooglegeminiLg>`





## Googlegemini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlegemini
include('simpleicons-14/G/Googlegemini')

' renders the element
Googlegemini('Googlegemini', 'Googlegemini', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlegemini
include('simpleicons-14/G/Googlegemini')

' renders the element
Googlegemini('Googlegemini', 'Googlegemini', 'an optional tech label', 'an optional description')
@enduml
```

