# Googleoptimize


```text
simpleicons-14/G/Googleoptimize
```

```text
include('simpleicons-14/G/Googleoptimize')
```



| Illustration | Googleoptimize |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googleoptimize.png) | ![illustration for Googleoptimize](../../simpleicons-14/G/Googleoptimize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleoptimizeXs>`
- `<$GoogleoptimizeSm>`
- `<$GoogleoptimizeMd>`
- `<$GoogleoptimizeLg>`





## Googleoptimize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleoptimize
include('simpleicons-14/G/Googleoptimize')

' renders the element
Googleoptimize('Googleoptimize', 'Googleoptimize', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleoptimize
include('simpleicons-14/G/Googleoptimize')

' renders the element
Googleoptimize('Googleoptimize', 'Googleoptimize', 'an optional tech label', 'an optional description')
@enduml
```

