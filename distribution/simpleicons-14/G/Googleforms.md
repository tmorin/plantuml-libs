# Googleforms


```text
simpleicons-14/G/Googleforms
```

```text
include('simpleicons-14/G/Googleforms')
```



| Illustration | Googleforms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googleforms.png) | ![illustration for Googleforms](../../simpleicons-14/G/Googleforms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleformsXs>`
- `<$GoogleformsSm>`
- `<$GoogleformsMd>`
- `<$GoogleformsLg>`





## Googleforms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleforms
include('simpleicons-14/G/Googleforms')

' renders the element
Googleforms('Googleforms', 'Googleforms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleforms
include('simpleicons-14/G/Googleforms')

' renders the element
Googleforms('Googleforms', 'Googleforms', 'an optional tech label', 'an optional description')
@enduml
```

