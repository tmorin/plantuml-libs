# Cakephp


```text
simpleicons/C/Cakephp
```

```text
include('simpleicons/C/Cakephp')
```



| Illustration | Cakephp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cakephp.png) | ![illustration for Cakephp](../../simpleicons/C/Cakephp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CakephpXs>`
- `<$CakephpSm>`
- `<$CakephpMd>`
- `<$CakephpLg>`





## Cakephp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cakephp
include('simpleicons/C/Cakephp')

' renders the element
Cakephp('Cakephp', 'Cakephp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cakephp
include('simpleicons/C/Cakephp')

' renders the element
Cakephp('Cakephp', 'Cakephp', 'an optional tech label', 'an optional description')
@enduml
```

