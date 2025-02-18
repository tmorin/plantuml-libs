# Generalelectric


```text
simpleicons-14/G/Generalelectric
```

```text
include('simpleicons-14/G/Generalelectric')
```



| Illustration | Generalelectric |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Generalelectric.png) | ![illustration for Generalelectric](../../simpleicons-14/G/Generalelectric.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GeneralelectricXs>`
- `<$GeneralelectricSm>`
- `<$GeneralelectricMd>`
- `<$GeneralelectricLg>`





## Generalelectric

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Generalelectric
include('simpleicons-14/G/Generalelectric')

' renders the element
Generalelectric('Generalelectric', 'Generalelectric', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Generalelectric
include('simpleicons-14/G/Generalelectric')

' renders the element
Generalelectric('Generalelectric', 'Generalelectric', 'an optional tech label', 'an optional description')
@enduml
```

