# Affine


```text
simpleicons-14/A/Affine
```

```text
include('simpleicons-14/A/Affine')
```



| Illustration | Affine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Affine.png) | ![illustration for Affine](../../simpleicons-14/A/Affine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AffineXs>`
- `<$AffineSm>`
- `<$AffineMd>`
- `<$AffineLg>`





## Affine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Affine
include('simpleicons-14/A/Affine')

' renders the element
Affine('Affine', 'Affine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Affine
include('simpleicons-14/A/Affine')

' renders the element
Affine('Affine', 'Affine', 'an optional tech label', 'an optional description')
@enduml
```

