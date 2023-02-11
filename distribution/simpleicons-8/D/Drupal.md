# Drupal


```text
simpleicons-8/D/Drupal
```

```text
include('simpleicons-8/D/Drupal')
```



| Illustration | Drupal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Drupal.png) | ![illustration for Drupal](../../simpleicons-8/D/Drupal.Local.png) |




## Drupal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Drupal
include('simpleicons-8/D/Drupal')

' renders the element
Drupal('Drupal', 'Drupal', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Drupal
include('simpleicons-8/D/Drupal')

' renders the element
Drupal('Drupal', 'Drupal', 'an optional tech label', 'an optional description')
@enduml
```

